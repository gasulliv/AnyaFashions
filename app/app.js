 $(document).ready(function() {

console.log(window.location.pathname);

function sort(){

    if (window.location.pathname === "/AnyaFashions/routes/collection.html"){

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

    } else if (window.location.pathname === "/AnyaFashions/routes/trend.html") {

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
    } else if (window.location.pathname === "/AnyaFashions/routes/hunter.html") {

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

    } else if (window.location.pathname === "/AnyaFashions/routes/men.html")

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

    } else if (window.location.pathname === "/AnyaFashions/routes/women.html") {

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

    } else if (window.location.pathname === "/AnyaFashions/routes/accessories.html") {

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

    }
}


sort();

});

