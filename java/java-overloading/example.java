//basic example
package overloading;

class Animal {
  private String name = "";
  private String type = "";
  private int age = 0;
  public String getName(){
    return name;
  }
  public void setName(String name){
    this.name = name;
  }
  public void setType(String type){
    this.type = type;
  }
  public void setType(String name, int age){
    this.name = name;
    this.age = age;
  }
}

class CreateAnimal {
  public static void main(String[] args){
    Animal pig = new Animal();
    pig.setType("bob", 10);
    System.out.println(pig.getName());
  }
}
