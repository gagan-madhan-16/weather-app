export const Background = ({weather}) => {
    if (!weather) return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80";
  
    const weatherCondition = weather.details.toLowerCase();
    
    if (weatherCondition.includes("clear sky") || weatherCondition.includes("clear")) {
      return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
    }
    
    if (weatherCondition.includes("clouds") ||weatherCondition.includes("few clouds") || weatherCondition.includes("scattered clouds") || weatherCondition.includes("broken clouds") || weatherCondition.includes("overcast clouds")) {
      return "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
    }
    
    if (weatherCondition.includes("thunderstorm with light rain") || weatherCondition.includes("thunderstorm with rain") || weatherCondition.includes("thunderstorm with heavy rain") || weatherCondition.includes("light thunderstorm") || weatherCondition.includes("thunderstorm") || weatherCondition.includes("heavy thunderstorm") || weatherCondition.includes("ragged thunderstorm") || weatherCondition.includes("thunderstorm with light drizzle") || weatherCondition.includes("thunderstorm with drizzle") || weatherCondition.includes("thunderstorm with heavy drizzle")) {
      return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";
    }
    
    if (weatherCondition.includes("light intensity drizzle") || weatherCondition.includes("drizzle") || weatherCondition.includes("heavy intensity drizzle") || weatherCondition.includes("light intensity drizzle rain") || weatherCondition.includes("drizzle rain") || weatherCondition.includes("heavy intensity drizzle rain") || weatherCondition.includes("shower rain and drizzle") || weatherCondition.includes("heavy shower rain and drizzle") || weatherCondition.includes("shower drizzle")) {
      return "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80";
    }
    
    if (weatherCondition.includes("light rain") || weatherCondition.includes("moderate rain") || weatherCondition.includes("heavy intensity rain") || weatherCondition.includes("very heavy rain") || weatherCondition.includes("extreme rain") || weatherCondition.includes("freezing rain") || weatherCondition.includes("light intensity shower rain") || weatherCondition.includes("shower rain") || weatherCondition.includes("heavy intensity shower rain") || weatherCondition.includes("ragged shower rain")|| weatherCondition.includes("rain")) {
      return "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80";
    }
    
    if (weatherCondition.includes("light snow") || weatherCondition.includes("snow") || weatherCondition.includes("heavy snow") || weatherCondition.includes("sleet") || weatherCondition.includes("light shower sleet") || weatherCondition.includes("shower sleet") || weatherCondition.includes("light rain and snow") || weatherCondition.includes("rain and snow") || weatherCondition.includes("light shower snow") || weatherCondition.includes("shower snow") || weatherCondition.includes("heavy shower snow")) {
      return "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
    }
    
    if (weatherCondition.includes("mist") || weatherCondition.includes("smoke") || weatherCondition.includes("haze") || weatherCondition.includes("sand/dust whirls") || weatherCondition.includes("sand") || weatherCondition.includes("dust") || weatherCondition.includes("volcanic ash") || weatherCondition.includes("squalls") || weatherCondition.includes("tornado") || weatherCondition.includes("fog")) {
      return "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80";
    }
    
    return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80";
  };