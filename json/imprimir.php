    <?php
         // requerimnos el archivo json
         $data = file_get_contents("http://localhost:3000/json/clientes.json");
         $clientes = json_decode($data, true);

         foreach($clientes as $cliente){
             echo '<pre>';
             print_r($cliente); 
             echo '</pre>';
         }
    ?>
   
