const aCar = {
  owner : "Joe Bloggs",
  address: '3 Walkers Lane',

  features : ['Parking assist', 'Alarm', 'Tow-bar'],

  previous_owners: [
      { name : ' Pat Smith', address : ' 1 Main Street'},
      { name : ' Sheila Dwyer', address : '2 High Street'}
    ],

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

for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
}

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i]) ;
}


for (let p in aCar.type)  {
  console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}






console.log('It is a ' + aCar.colour.exterior + ' car with ' + aCar.mileage + ' mileage, with a ' + aCar.colour.interiorFab + ' interior');

console.log(aCar.owner);

console.log(aCar.owner + ' drives a ' + aCar.type.make)