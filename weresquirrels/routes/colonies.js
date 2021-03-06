var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/weresquirrels');

var Colonies = db.get('colonies');
var Unibears = db.get('unibears');
var Weresquirrels = db.get('weresquirrels');
var Duels = db.get('duels');
var UnibearAgreements = db.get('unibearAgreements');
var WeresquirrelAgreements = db.get('weresquirrelAgreements');
var WeresquirrelStats = db.get('weresquirrelStats');

/* GET users listing. */
var JoinColoniesDuels = function (colonies, duels) {
  colonies.forEach(function (colony) {
    colony.duelsWon = [];
    duels.forEach(function (duel) {
      if (colony._id.toString() === duel.won.toString()) {
        colony.duelsWon.push(duel);
      }
    });
  });
  return colonies;
}

var JoinWeresquirrelColony = function (weresquirrels, colonies) {
  weresquirrels.forEach(function (weresquirrel) {
    colonies.forEach(function (colony) {
      if (weresquirrel.colonyId.toString() === colony._id.toString()) {
        weresquirrel.colonyName = colony.name;
      }
    });
  });
  return weresquirrels;
}

router.get('/weresquirrels', function(req, res, next) {
  var result = {};
  Weresquirrels.find({}).then(function (weresquirrels) {
    return weresquirrels;
  }).then(function (weresquirrels) {
    var weresquirrelData = [];
    var promises = [];
    weresquirrels.forEach(function (weresquirrel) {
      weresquirrelData.push({weresquirrel_id: weresquirrel._id, name: weresquirrel.name, img: weresquirrel.img, duels: []});
      promises.push(WeresquirrelStats.find({weresquirrelId: weresquirrel._id}))
    });
    Promise.all(promises).then(function (weresquirrelStats) {
      weresquirrelStats.forEach(function (duelStats, i) {
        duelStats.forEach(function (duelStat) {
          weresquirrelData[i].duels.push(duelStat);
        });
      });
      result['weresquirrelData'] = weresquirrelData;
      return result;
    }).then(function (result) {
      var promises2 = [];
      result.weresquirrelData.forEach(function (weresquirrel) {
        promises2.push(WeresquirrelAgreements.find({weresquirrelId: weresquirrel.weresquirrel_id}));
      });
      Promise.all(promises2).then(function (agreements) {
        agreements.forEach(function (agreement, i) {
          result.weresquirrelData[i]['colonyId'] = agreement[0].colonyId;
        });
        return result;
      }).then(function (result) {
        Colonies.find({}).then(function (colonies) {
          JoinWeresquirrelColony(result.weresquirrelData, colonies);
          res.render('colonies/stat', {weresquirrels: result.weresquirrelData});
        });
      });
    });
  });
});


router.get('/', function(req, res, next) {
  Colonies.find({}).then(function (colonies) {
    return Duels.find({}).then(function (duels) {
      JoinColoniesDuels(colonies, duels);
      res.render('colonies/home', {title: "All Colonies", allColonies: colonies});
    });
  });
});

router.get('/:id', function (req,res,next){
  var result = {};

  Colonies.findById(req.params.id).then(function (colony){
    return WeresquirrelAgreements.find({colonyId: colony._id}).then(function (weresquirrels){
      return weresquirrels
    })
  })
  .then(function (weresquirrels){
    return weresquirrels.map(function (weresquirrel){
      return weresquirrel.weresquirrelId
    })
  })
  .then(function (weresquirrelIds){
    return Weresquirrels.find({_id: {$in: weresquirrelIds }}).then(function (weresquirrels){
      return weresquirrels
    })
  })
  .then(function (weresquirrels){
    var weresquirrelData = [],
        promises = []

    weresquirrels.forEach(function (weresquirrel){
      weresquirrelData.push({name: weresquirrel.name, duels: []})
      promises.push(WeresquirrelStats.find({weresquirrelId: weresquirrel._id }))
    })
    Promise.all(promises).then(function (weresquirrelStats){
      weresquirrelStats.forEach(function (duelStats, i){
        duelStats.forEach(function (duelStat){
          weresquirrelData[i].duels.push(duelStat)
        })
      })
      result["weresquirrelData"] = weresquirrelData
      result['unibears'] = []
      return result
    })
    .then(function (result){
      Colonies.findById(req.params.id).then(function (colony){
        return UnibearAgreements.find({colonyId: colony._id}).then(function (agreements){
          return agreements
        })
      })
      .then(function (agreements){
        return agreements.map(function (unibears){
          return unibears.unibearId
        })
      })
      .then(function (unibearsIds){
        return Unibears.find({_id: {$in: unibearsIds }}).then(function (unibears){
          return unibears
        })
      })
      .then(function (unibears){
        unibears.forEach(function (unibear){
          result.unibears.push({name: unibear.name})
        })
        return result
      })
      .then(function (result){
        res.render('colonies/show', { title: 'Colony Information',
                                      weresquirrels: result.weresquirrelData,
                                      unibears: result.unibears  })
      })
    })
  })
})
module.exports = router;



