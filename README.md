# javascript-tips

# DELEGACION DE EVENTOS

# Ejemplo carrito de compras con objeto, template, templateFooter.


## template
```html
<template id="template">
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Frutilla</span>
        <span class="badge bg-primary rounded-pill">12</span>
    </li>
</template>
````

## template Footer
```html
<template id="templateFooter">            
      <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <p class="lead mb-0">Total $ <span>1500</span></p>
          <button class="btn btn-outline-info">Finalizar Compra</button>
        </div>
      </div>
    </template>