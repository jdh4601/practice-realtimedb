import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
// import { database } from '../../firebase.config';
// import { getDatabase, ref, set, push } from 'firebase/database';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      // fetch -> axios로 바꾸기
      const res = await fetch(
        'https://food-order-8feb5-default-rtdb.firebaseio.com/meals.json'
      );
      const responseData = await res.json();

      const loadMeals = [];

      for (const key in responseData) {
        loadMeals.push({
          id: key, // key -> m1:0, m2:1 ...
          name: responseData[key].name,
          desciption: responseData[key].description,
          price: responseData[key].price,
        });

        setMeals(loadMeals);
      }

      // const db = getDatabase();
      // const postListRef = ref(db, 'meals'); // db 가져옴
      // const newMealRef = push(postListRef); // 새로운 meal 참조(ref)값

      // responseData.map(meal =>
      //   set(newMealRef, {
      //     id: meal.id,
      //     name: meal.name,
      //     desc: meal.description,
      //     price: meal.price,
      //   })
      // );
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
