'use strict';

//list of cars
//useful for ALL exercises
var cars = [{ // tableau d'objets
  'id': 'p306', //  attributs
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);



function convertDate(string) {
    var re = /[0-9]+/g;
    var result = re[Symbol.match](string);
    var dateLoc = new Date(result[0]  , result[1] , result [2]);
    return dateLoc;
}


function getDays(beginDate,returnDate)
{
	var begin =convertDate(beginDate).getTime();
	console.log(begin);

	var end = convertDate(returnDate).getTime();
	console.log(end);

	var MS = 24*60*60*1000;
	console.log(MS);

	var days = (Math.abs(end - begin))/MS; //the difference is in miliseconds
	console.log(days);

	return days;
}
//Exercice 1
function computePrice()
{
  var rentalDays = 0;
  var carPricePerDay = 0;
  var distance = 0;
  var totalPrice = 0;
  var pricePerDay = 0;

  for ( var i=0 ; i< rentals.length ; i++)
  {
    for ( var j=0 ; j< cars.length ; j++)
    {
      if (rentals[i].carId == cars[j].id)
      {
        rentalDays= getDays(rentals[i].pickupDate,rentals[i].returnDate);
        pricePerDay = cars[j].pricePerDay;
        priceDistance = cars[j].pricePerKm*rentals[i].distance;
        totalPrice = rentalDays*pricePerDay + priceDistance;
        rentals[i].price=totalPrice;
      }
    }

  }
  console.log(totalPrice);
}


//Exercice 2
function DecreasingPricing()
{
  var rentalDays = 0;
  var carPricePerDay = 0;
  var distance = 0;
  var totalPrice = 0;
  var pricePerDay = 0;

  for ( var i=0 ; i< rentals.length ; i++)
  {
    for ( var j=0 ; j< cars.length ; j++)
    {
      if (rentals[i].carId == cars[j].id)
      {
        rentalDays= getDays(rentals[i].pickupDate,rentals[i].returnDate);
        pricePerDay = cars[j].pricePerDay;
        if (rentalDays > 1 && rentalDays<=4)
        {

          priceDistance = cars[j].pricePerKm*rentals[i].distance;
          totalPrice = rentalDays*pricePerDay*0.9 + priceDistance;
          rentals[i].price=totalPrice;
          console.log(rentals[i].driver.firstName + " you have a decrease of 10% per days for your rental");
        }

        else if ( rentalDays>4 && rentalDays<=10)
        {
          priceDistance = cars[j].pricePerKm*rentals[i].distance;
          totalPrice = rentalDays*pricePerDay*0.7 + priceDistance;
          rentals[i].price=totalPrice;
          console.log(rentals[i].driver.firstName + " you have a decrease of 30% per days for your rental");
        }

        else if ( rentalDays>10)
        {
          priceDistance = cars[j].pricePerKm*rentals[i].distance;
          totalPrice = rentalDays*pricePerDay*0.5 + priceDistance;
          rentals[i].price=totalPrice;
          console.log(rentals[i].driver.firstName + " you have a decrease of 50% per days for your rental");
        }

        else
        {

          priceDistance = cars[j].pricePerKm*rentals[i].distance;
          totalPrice = rentalDays*pricePerDay + priceDistance;
          rentals[i].price=totalPrice;

        }


      }
    }

  }

}


//Exercice 3

function Commission()
{
  var insuranceCommission=0;
  var roadSideAssistance=0;
  var drivyCommission=0;
  var commission = 0;
  var rentalDays = 0;
  for ( var i=0 ; i<rentals.length ; i++)
  {
    commission = rentals[i].price*0.3; // commission
    rentalDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);

    insuranceCommission = commission/2; //insurance commission
    rentals[i].commission.insurance = insuranceCommission;
    console.log(insuranceCommission);

    roadSideAssistance = rentalDays; //assistance commission
    rentals[i].commission.assistance = roadSideAssistance ;

    drivyCommission = commission - (insuranceCommission + roadSideAssistance); //drivy commission
    rentals[i].commission.drivy = drivyCommission ;
  }
}

//Exercice 4

function deductibleReduction()
{
  var rentalDays=0;
  for (var i=0 ; i<rentals.length ; i++)
  {
    rentalDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
    if ( rentals[i].options.deductibleReduction == true )
    {
      rentals[i].price=rentals[i].price + rentalDays*4;

    }
  }

}



//Exercice 5

function PaymentForActors()
{

  for ( var i=0 ; i < actors.length ; i++)
  {

    for ( var j=0 ; j<rentals.length ; j++)
    {
      if (actors[i].rentalId==rentals[j].id)
      {
        rentalDays = getDays(rentals[j].pickupDate,rentals[j].returnDate);

        actors[i].payment[0].amount = rentals[j].price; //value that driver must pay
        actors[i].payment[1].amount = rentals[j].price - rentals[j].price*0.3; // value that the owner receives
        actors[i].payment[2].amount = rentals[j].commission.insurance; // value that the insurance receives
        actors[i].payment[3].amount = rentals[j].commission.assistance; //value that the assistance receives
        actors[i].payment[4].amount = rentals[j].commission.drivy + rentalDays*4; // value that drivy receives ( commission + deductible)

      }

    }

  }

}
