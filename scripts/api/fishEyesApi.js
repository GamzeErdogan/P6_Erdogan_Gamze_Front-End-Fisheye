const fishEyesAPI = async () => {
    
    let url = './data/photographers.json';
    try {
        let res = await fetch (url);
        return  res.json();
        
    } catch (error){
        console.log(error);
    }
};

  

