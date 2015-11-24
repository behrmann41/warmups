// import java.util.Timer;
// import java.util.TimerTask;
//
// class Clock {
//   private int seconds = 0;
//   private int minutes = 0;
//   private int hours = 0;
//   private int increment = 1;
//   public void setTime(int hours, int minutes, int seconds){
//     this.hours = hours;
//     this.minutes = minutes;
//     this.seconds = seconds;
//   }
//   public void tick(){
//     // Timer t = new Timer();
//     // t.schedule(new TimerTask() {
//     //   @Override
//     //   public void run() {
//         if (seconds == 59){
//           seconds = 0;
//           if (minutes == 59){
//             minutes = 0;
//             if (hours == 12){
//               hours = increment;
//             } else {
//           seconds += increment;
//         }
//       }
//     }, 1000);
//   }
//   public String getTime(){
//     return hours + ":" + minutes + ":" + seconds;
//   }
// }
//
// class Clock01 {
//   public static void main(String[] args){
//   Clock clock = new Clock();
//   clock.tick();
//   clock.tick();
//   clock.tick();
//   clock.tick();
//   System.out.println(clock.getTime());
//   }
// }

// import java.util.Date;
//
// public class DateDemo {
//    public static void main(String args[]) {
//        // Instantiate a Date object
//        Date date = new Date();
//
//        // display time and date using toString()
//        System.out.println(date.toString());
//    }
// }

package galvanize;

class Clock {
  protected int seconds = 0;
  protected int minutes = 0;
  protected int hours = 0;

  String getTime() {
    return String.format("%02d:%02d:%02d", hours, minutes, seconds);
  }

  void setTime(int hours, int minutes, int seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  void tick(){
    if (seconds == 59) {
      seconds = 0;
      setMinutes();
    } else {
      seconds++;
    }
  }

  protected void setMinutes() {
    if (minutes == 59) {
      minutes = 0;
      setHour();
    } else {
      minutes++;
    }
  }

  protected void setHour() {
    hours = hours == 24 ? 0 : hours + 1;
  }
}

class RunClock {
  public static void main(String[] args) throws InterruptedException {
    Clock clock = new Clock();

    System.out.println(clock.getTime());
    while (true) {
      clock.tick();
      Thread.sleep(1000);
      System.out.println(clock.getTime());
    }
  }
}

// run with javac -d bin clock.java && java -cp bin galvanize.RunClock
