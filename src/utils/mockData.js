const resData = [{
  id:1,
  name:'ABC Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:4.6,
  delivery:'46 minutes'
},{
  id:2,
  name:'ABD Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:3.6,
  delivery:'46 minutes'
},{
  id:3,
  name:'ABE Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:1.6,
  delivery:'46 minutes'
},{
  id:4,
  name:'ABF Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:4.8,
  delivery:'46 minutes'
},{
  id:5,
  name:'ABG Restaurant',
  cuisines:'Sandwidth,Halwa',
  ratings:4.0,
  delivery:'46 minutes'
}]

export const resDataAPi = {
  data:[{
  id:1,
  name:'ABC Restaurant',
  cuisines:['Sandwidth','Halwa'],
  ratings:4.6,
  sla:{deliveryTime:'46 minutes'}
},{
  id:2,
  name:'ABD Restaurant',
  cuisines:['Sandwidth','Halwa'],
  avgRatingString:3.6,
  sla:{deliveryTime:'46 minutes'}
},{
  id:3,
  name:'ABE Restaurant',
  cuisines:['Sandwidth','Halwa'],
  avgRatingString:1.6,
  sla:{deliveryTime:'46 minutes'}
},{
  id:4,
  name:'ABF Restaurant',
  cuisines:['Sandwidth','Halwa'],
  avgRatingString:4.8,
  sla:{deliveryTime:'46 minutes'}
},{
  id:5,
  name:'ABG Restaurant',
  cuisines:['Sandwidth','Burger'],
  avgRatingString:4.0,
  sla:{deliveryTime:'46 minutes'}
}]

}



export default resData;