<?php

class administratorController extends Administrator{

	function index(){
		require_once('views/all/header.php');
		require_once('views/all/nav.php');
		require_once('views/index/index.php');
		require_once('views/index/modals.php');
		require_once('views/all/footer.php');
	}

	function table_users(){
		?>
		<table class="table table-bordered border-primary">
			<thead>
				<tr>
				<th class="id" >ID</th>
				<th>Marca</th>
				<th>Producto</th>
				<th>Ciudad</th>
				<th>Precio</th>
				<th>Opciones</th>
				</tr>
			</thead>
			<tbody >		
		<?php
		foreach (parent::get_view_users() as $data) {
		?>
		<tr>
			<td class="id"><?php echo $data->id_user;?></td>
			<td><?php echo $data->brand_user;?></td>
			<td><?php echo $data->last_product_user;?></td>
			<td><?php echo $data->city_user;?></td>
			<td><?php echo $data->price_user;?></td>
			<td>
			  <div class="btn-group">
			    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
			    Seleccionar <span class="caret"></span></button>
			    <ul class="dropdown-menu" role="menu">
			      <li><a href="#" onclick="ModalUpdate(
				  '<?php echo $data->id_user; ?>',
				  '<?php echo $data->brand_user; ?>',
				  '<?php echo $data->last_product_user; ?>',
				  '<?php echo $data->city_user; ?> ',
				  '<?php echo $data->price_user; ?> '
				  );">
				  <h5>Actualizar</h5></a></li>
			      <li><a href="#" onclick="deleteUser('<?php echo $data->id_user; ?>');"><p>Borrar</p></a></li>
			    </ul>
			  </div>
			</td>
		</tr>
		<?php
		}
		?>
			</tbody>
		</table>	
	<?php	
    }
    
	function deleteuser(){		
			parent::set_delete_user($_REQUEST['id']);		
    }

	function registeruser(){
		$data = array(
					'brand' => $_REQUEST['brand'],
					'last_product' => $_REQUEST['last_product'],
					'city'	=> $_REQUEST['city'],
					'price'	=> $_REQUEST['price']
					
					);		
					parent::set_register_user($data);		
    }    
    
	function updateuser(){
		$data = array(
					'id' => $_REQUEST['id'],
					'brand' => $_REQUEST['brand'],
					'last_product' => $_REQUEST['last_product'],
					'city'	=> $_REQUEST['city'],
					'price'	=> $_REQUEST['price']
					
					);		
			parent::set_update_user($data);		
	}    
    
}

