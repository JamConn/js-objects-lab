const aCar = {
  owner : "Joe Bloggs",
  type :{
      make: "Toyota",
      model: "Corolla",
      CC: 1.8
  } ,
  registration :{
      year: 201,
      county: "WD",
      number: 1058
  },
};

aCar.mileage = 10000;
aCar.colour ={
  exterior: "red",
  interiorFab: "Leather",
  interiorColour: "cream"
}

console.log('It is a ' + aCar.colour.exterior + ' car with ' + aCar.mileage + ' mileage, with a ' + aCar.colour.interiorFab + ' interior');


console.log(aCar.owner);

console.log(aCar.owner + ' drives a ' + aCar.type.make)