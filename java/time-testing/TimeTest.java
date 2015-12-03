package test;

import java.util.*;

public class TimeTest {
  private int[] theArray;
  private int arraySize;
  private int itemsInArray = 0;
  static long startTime;
  static long endTime;

  public void generateRandomArray(){
    for (int i = 0; i < arraySize ; i++ ) {
      theArray[i] = (int) (Math.random() * 1000) + 10;
    }
    itemsInArray = arraySize - 1;
  }

  TimeTest(int size){
    arraySize = size;
    theArray = new int[size];
  }

  public void minMax1(int theArray){
    int min = Integer.MIN_VALUE;
    int max = Integer.MAX_VALUE;
    for (int x : theArray){
      if (x < min) min = x;
      if (x > max) max = x;
    }
  }

  public void minMax2(int theArray){
    int min = Integer.MIN_VALUE;
    int max = Integer.MAX_VALUE;
    for (int x : theArray){
      if (x < min) min = x;
    }
    for (int x : theArray){
      if (x > max) max = x;
    }
  }

  public static void main(String[] args){
    TimeTest test1 = new TimeTest(100);
    TimeTest test2 = new TimeTest(100);
    startTime = System.currentTimeMillis();
    test1.generateRandomArray();
    test1.minMax1(theArray);
    endTime = System.currentTimeMillis();
    System.out.println("Function took " + (endTime - startTime));
  }
}

//javac -d bin TimeTest.java && java -cp bin test.TimeTest
