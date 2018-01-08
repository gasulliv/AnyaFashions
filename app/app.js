 $(document).ready(function() {

console.log(window.location.pathname);

function sort(){

    if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/collection.html"){

        for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemClass === "collection")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/trend.html") {

       for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemClass === "trend")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }
    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/hunter.html") {

        for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemClass === "hunter")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/men.html")

    {

      for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep === "male")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/women.html") {

        for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep === "female")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/accessories.html") {

        for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep === "accessories")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/menshirts.html") {

      for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep && itemList[i].itemType === "male" && "shirt");

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }


    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/mencoats.html") {

      for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep && itemList[i].itemType === "male" && "coat")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }


    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/womenshirts.html") {

      for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep && itemList[i].itemType === "female" && "shirt")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/dresses.html") {

      for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemType === "dress")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    } else if (window.location.pathname === "/Users/gracesullivan/Desktop/anya/routes/womenscoats.html") {

      for (var i = 0, len = itemList.length; i < len; i++)

          {

            if (itemList[i].itemDep && itemList[i].itemType === "female" && "coat")

            {

            console.log(itemList[i].itemImage);

            let image = itemList[i].itemImage;


            let stockDiv = $('<div id = "stockDiv" class = "col-3 style">)').css(

              {
                "background-image": "url("+image+")",
                "background-size":"cover",
                "background-repeat": "no-repeat"

              });

                $(".gallery").append(stockDiv);

            }
        }

    }
}


sort();

});

