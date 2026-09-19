function loadscript(src, callback) {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback();
  console.log("hey bhaii");
}

loadscript("here/the/script/will/be/loaded0", function goodmorning(error, src) {
  if (error) {
    console.log("Bhaii error agaya");
    return;
  }
  loadscript(
    "here/the/script/will/be/loaded1",
    function goodmorning(error, src) {
      if (error) {
        console.log("Bhaii error agaya");
        return;
      }
      loadscript(
        "here/the/script/will/be/loaded2",
        function goodmorning(error, src) {
          if (error) {
            console.log("Bhaii error agaya");
            return;
          }
          loadscript(
            "here/the/script/will/be/loaded3",
            function goodmorning(error, src) {
              if (error) {
                console.log("Bhaii error agaya");
                return;
              }
              loadscript(
                "here/the/script/will/be/loaded4",
                function goodmorning(error, src) {
                  if (error) {
                    console.log("Bhaii error agaya");
                    return;
                  }
                  loadscript(
                    "here/the/script/will/be/loaded5",
                    function goodmorning(error, src) {
                      if (error) {
                        console.log("Bhaii error agaya");
                        return;
                      }
                      loadscript(
                        "here/the/script/will/be/loaded6",
                        function goodmorning(error, src) {},
                      );
                    },
                  );
                },
              );
            },
          );
        },
      );
    },
  );
});
