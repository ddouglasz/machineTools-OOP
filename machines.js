
class EngineeringMachines {
    //polymorphismm the ability for a class to take different form so that child class can inherit different attributes of that class. example is the "shapes" class in which rectangle, triangles etc can inherit diffrent properties to use like length, number of sides, area and so on. depending on the shape.
    constructor(name) {
      this.name = name;
    }
    //ENCAPSULATION
    machineField() {
      if (
        this.name === 'dozer' ||
        this.name === 'excavator' ||
        this.name === 'roller'
      ) {
        console.log(this.name + ' is a civil engineering machine');
      } else {
        if (
          this.name === 'crimping tool' ||
          this.name === 'router' ||
          this.name === 'cable scanner'
        ) {
          console.log(this.name + ' is a data networking machine tool');
        }
      }
    }
  
    machineType() {
      if (
        this.name === 'dozer' ||
        this.name === 'excavator' ||
        this.name === 'roller'
      ) {
        console.log(this.name + ' is a heavy machine');
      } else {
        if (
          this.name === 'crimping tool' ||
          this.name === 'router' ||
          this.name === 'cable scanner'
        ) {
          console.log(this.name + ' is a portable machine');
        }
      }
    }
  }
  
  class Mech extends EngineeringMachines {
    machineUse(name) {
      //the "super" keyword is used to call a function from the parents class.
      super.machineType();
  
      if (this.name === 'dozer') {
        let property = (this.name + ' is used for creating road path');
        return property;
      } else 
        if (this.name == 'excavator') {
          console.log(this.name + ' is used for excavations and drainage');
        } else 
          if (this.name == 'roller') {
            console.log(this.name + ' is used for smoothening road paths');
        } else
        if (this.name === 'crimping tool') {
          console.log(
            this.name +
              ' is used for terminating data cables to their registered jacks and also for cutting cables'
          );
        } else 
          if (this.name == 'router') {
            console.log(
              this.name +
                'is used for sending and recieving of data either hard wired or wirelessly'
            );
          } else {
            if (this.name == 'cable scanner') {
              console.log(
                this.name +
                  ' is used for tracking cable fidelity and labeling/identifying of cables'
              );
            }
          }
        }
      
  }
  //if the types of EngineeringMachines are entered it tells the types, and inherits properties of its kind from the parents and also it tells its use too.
  
  var mech = new Mech('crimping tool');
  //inheriting directly from the parent class:INHERITANCE
  //inheritance portrays abstraction
  mech.machineField();
  mech.machineUse();
  
  var engineeringMachines = new EngineeringMachines('crimping tool');
  engineeringMachines.machineType();
   