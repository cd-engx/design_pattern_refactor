

# Practical Task Repository for design patterns

## Task Description
Analyze the given code and prepare refactor and unit tests for each of the task.

## General Task Guidelines

* Please make corrections per the principles/topics discussed so far in this course.
* The task repository may contain one or more practical tasks per topic. You are expected to complete all the tasks.
* While making changes, any files contained inside folder named `thirdparty` should be ignored. **Do not modify thirdparty classes.** These files are meant to provide context for the task and are not part of the task.
* Try to follow object-oriented design, there is no perfect design, it's all about the tradeoffs based on the context.

## Design patterns list
GoF Design Patterns  

### 1. Creational (5)
   - **Singleton Pattern**
     Ensures that only one object of a particular class is ever created.
   - **Factory Method**
     It provides a way to delegate the instantiation logic to child classes.
   - **Abstract Factory Pattern**
     A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.
   - **Builder Pattern**
     Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.
   - **Prototype Pattern**
     Create an object based on an existing object through cloning.

### Structural (7)  
   - **Adapter Class/Object**
     Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
   - **Composite Pattern**
     Composite pattern lets clients uniformly treat the individual objects.
   - **Proxy Pattern**
     Using the proxy pattern, a class represents the functionality of another class.
   - **Flyweight Pattern**
     It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.  
   - **Facade Pattern**
     Facade pattern provides a simplified interface to a complex subsystem.   
   - **Bridge**
     Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
   - **Decorator**
     Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.
  - **Adapter Pattern**
    Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

### Behavioral (11)
   - **Template Method Pattern**
     Template Method pattern outlines the general steps in the parent class and lets the concrete child implementations define the details.
   - **Mediator Pattern**
     Mediator decouples a set of classes by forcing their communications flow through a mediating object.
   - **Chain of Responsibility Pattern**
     It helps to build a chain of objects. A request enters from one end and keeps going from an object to another until it finds a suitable handler.
   - **Observer**
     Register as an observer to receive state changes in the object. 
   - **Strategy**
     Strategy pattern allows choosing the best-suited algorithm at runtime.
   - **Command Pattern**
     Storing requests as command objects allows performing an action or undoing it at a later time.
   - **State Pattern**
     State pattern allows an object to change its behavior.  
   - **Visitor Pattern**
     Visitor pattern defines operations that can be performed on the nodes of the data structure.
   - **Interpreter Pattern**
     Interpreter pattern interprets sentences in the desired language.  
   - **Iterator Pattern**
     Containers can provide a representation agnostic iterator interface to provide access to the elements.
   - **Memento Pattern**
     Memento pattern captures object internal state making it easy to store and restore objects in any point of time.