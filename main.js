var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.png", "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];
 var names = ["Family Book","shahid", "thasneem", "rayyan", "maryam","kenza" ];
 var i = 0;
 function update()
 {
     i++;
     var numbers_of_family_member_in_array = 5;
     if(i > numbers_of_family_member_in_array )
     {
         i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName;
    }


