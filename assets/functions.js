function objectAjax() {
  var xmlhttp = false;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
//Inicializo automaticamente la funcion read al entrar a la pagina o recargar la pagina;
addEventListener("load", read, false);

function read() {
  $.ajax({
    type: "POST",
    url: "?c=administrator&m=table_users",
    beforeSend: function () {
      $("#information").html("Procesando, espere por favor...");
    },
    success: function (response) {
      $("#information").html(response);
    },
  });
}

function register() {
  brand = document.formUser.brand.value;
  last_product = document.formUser.last_product.value;
  city = document.formUser.city.value;
  price = document.formUser.price.value;
  ajax = objectAjax();
  ajax.open("POST", "?c=administrator&m=registeruser", true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      read();
      alert("Los datos guardaron correctamente.");
      $("#addUser").modal("hide");
    }
  };
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send("brand=" + brand + "&last_product=" + last_product + "&city=" + city + "&price=" + price );
}

function update() {
  id = document.formUserUpdate.id.value;
  brand = document.formUserUpdate.brand.value;
  last_product = document.formUserUpdate.last_product.value;
  city = document.formUserUpdate.city.value;
  price = document.formUserUpdate.price.value;
  ajax = objectAjax();
  ajax.open("POST", "?c=administrator&m=updateuser", true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      read();
      alert("estas seguro de actualizar estos campos."),
      $("#updateUser").modal("hide");
    }
  };
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send(
    "brand=" + brand + "&last_product=" + last_product + "&city=" + city + "&price=" + price + "&id=" + id
  );
}

function deleteUser(id) {
  if (confirm("¿Esta seguro de eliminar este registro?")) {
    ajax = objectAjax();
    ajax.open("POST", "?c=administrator&m=deleteuser", true);
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4) {
        read();
      }
    };
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("id=" + id);
  }
}

function ModalRegister() {
  $("#addUser").modal("show");
}

function ModalUpdate(id, brand, last_product, city, price) {
  document.formUserUpdate.id.value = id;
  document.formUserUpdate.brand.value = brand;
  document.formUserUpdate.last_product.value = last_product;
  document.formUserUpdate.city.value = city;
  document.formUserUpdate.price.value = price;
  $("#updateUser").modal("show");
}
