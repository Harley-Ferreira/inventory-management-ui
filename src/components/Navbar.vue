<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="/src/assets/im-logo.png" width="60" height="30" />
      </a>

      <a role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/product/list" class="navbar-item">Produtos</router-link>
        <router-link to="/supplier" class="navbar-item">Fornecedores</router-link>
        <router-link to="/transaction" class="navbar-item">Transações</router-link>
      </div>
    </div>
  </nav>
</template>
