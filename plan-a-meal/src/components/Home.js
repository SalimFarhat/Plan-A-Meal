  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  },[]);

  const getMeals = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=5`);
    console.log(api);
    const data = await api.json();
    console.log(data);
    setMeals(data);
  }
  console.log(meals);