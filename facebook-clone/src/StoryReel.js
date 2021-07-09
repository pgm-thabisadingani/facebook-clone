import React from 'react';
import './StoryReel.css';
import Story from './Story'

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story 
        image="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        profilePic="https://images.unsplash.com/profile-1599446683222-b1e5543a0b3dimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        title="Julie J"
      />
      <Story 
      image="https://images.unsplash.com/photo-1545396047-e6bd84442366?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      profilePic="https://images.unsplash.com/profile-1526348617736-c5c94d07fd17?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
      title="Scott"
      />
      <Story 
      image="https://images.unsplash.com/photo-1499083773823-5000fa2b23e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80"
      profilePic="https://images.unsplash.com/profile-fb-1470071377-e324e6e39595.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
      title="v2osk"
      />
      <Story 
      image="https://images.unsplash.com/photo-1570568486340-83c438400cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80"
      profilePic="https://images.unsplash.com/profile-1599522596269-19570123e2c2image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
      title="Caique"
      />
      <Story 
      image="https://images.unsplash.com/photo-1598214015728-bc73871186d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
      profilePic="https://images.unsplash.com/profile-1624721371775-fb7a719da237image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
      title="Sam"
      />
    </div>
  )
}

export default StoryReel;
