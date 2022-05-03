    <?php
         // requerimnos el archivo json
         $data = file_get_contents("http://localhost:3000/json/clientes.json");
         $clientes = json_decode($data, true);

         echo '<pre>';
         print_r($clientes);
         echo '</pre>';

         $nombres = ["carlos","orelllana", "rapalo","eduardo"];
         
        //  for( $i = 0; $i < count($clientes); $i++ ){
        //         // echo "<div> $nombres[$i] </div>";
        //         echo "<div> $clientes[$i]->id </div>";
        //  }

        foreach($clientes as $cliente){
            echo "<ul>";
            echo "<li>  id: $cliente[id]</li>";
            echo "<li>  firstName: $cliente[firstName] </li>";
            echo "<li>  lastName: $cliente[lastName]</li>";
            echo "<li>  age: $cliente[age]</li>";
            echo "</ul>";
        }
    ?>
   
