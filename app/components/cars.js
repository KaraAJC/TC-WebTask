import React from 'react';

const cars = [{'id':1,'make':'Ford','model':'Focus','year':2012,'price_range':'$8,500 - $9,000','mileage':200000,'cylinders':'L4','city_mpg':20,'highway_mpg':25,'engine':'1.3','vin':'3GNDA13D96S631406','item_num':'#1395P'},{'id':2,'make':'Chevy','model':'Monte Carlo','year':1976,'price_range':'$28,500 - $79,000','mileage':22000,'cylinders':'L4','city_mpg':28,'highway_mpg':30,'engine':'1.9','vin':'3KAJC13D96S362016','item_num':'#1482K'}];

export default () => (
  <ul>{cars.map( car =>
    <li key={car.id}>{car.make} {car.model}</li>
  )}</ul>
)