import { globalConstants } from '../constant';

export function Get_Gender_Interest_Based_List(user, users): any {
  const tempArray = [];
  for (const u of users) {
    if(user.interest == globalConstants.FEMALE){
      if(u.interest == globalConstants.FEMALE)
        tempArray.push(u);
    }
    if(user.interest == globalConstants.MALE){
      if(u.interest == globalConstants.MALE)
        tempArray.push(u);
    }
  }
  return tempArray;
}

export function Get_Age_Based_List(user, users): any {
  const tempArray = [];
  for (const u of users) {
    if (user.age <= 20) {
      if (u.age < 20) tempArray.push(u);
    } else if (user.age >= 20 && user.age <= 30) {
      if (u.age >= 20 && u.age <= 30) tempArray.push(u);
    }
  }
  return tempArray;
}

export function Get_Race_Based_List(user, users): any {
  const tempArray = [];
  for (const u of users) {
    if(user.race == globalConstants.BLACK){
      if(u.race == globalConstants.BLACK)
        tempArray.push(u);
    }
    if(user.race == globalConstants.WHITE){
      if(u.race == globalConstants.WHITE)
        tempArray.push(u);
    }
  }
  return tempArray;
}

export function Get_Location_Based_List(user, users): any {
  const tempArray = [];
  for (const u of users) {
    if(user.location == globalConstants.USA){
      if(u.location == globalConstants.USA)
        tempArray.push(u);
    }
    if(user.location == globalConstants.CANADA){
      if(u.location == globalConstants.CANADA)
        tempArray.push(u);
    }
    if(user.location == globalConstants.UK){
      if(u.location == globalConstants.UK)
        tempArray.push(u);
    }
    if(user.location == globalConstants.PAK){
      if(u.location == globalConstants.PAK)
        tempArray.push(u);
    }
  }
  return tempArray;
}
export function Get_Hobbies_Based_List(user, users): any {
  const tempArray = [];
  if(user.hobbies.length > 0){
    for (const u of users) {
      for (const userHobies of u.hobbies) {
        if (user.hobbies.includes(userHobies)) tempArray.push(u);
      }
    }
    return tempArray;
  } else return users;
}
