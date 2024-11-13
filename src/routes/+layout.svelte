<script>
  import '../app.css'
</script>

<header class="flex justify-end gap-2 py-20 px-48 max-xl:py-10 max-xl:px-12">
  <a
    class=" bg-azul w-6 h-6 hover:bg-verde hover:rotate-45 hover:scale-105 max-md:w-4 max-md:h-4"
    href="https://www.youtube.com/watch?v=2_rB5d1uXWs&list=PLXHB4fvDu4Q7ScCZz0WnF-SsUQGBJ4hC"
    target="_blank"
  >
  </a>
  <a
    class=" bg-rosa w-6 h-6 hover:bg-azul hover:rounded-full hover:scale-105 max-md:w-4 max-md:h-4"
    href="https://www.youtube.com/watch?v=VFwVtn_ybSQ"
    target="_blank"
  >
  </a>
  <a
    class=" bg-verde w-6 h-6 hover:bg-rosa hover:rounded-t-3xl max-md:w-4 max-md:h-4"
    href="https://i.pinimg.com/736x/13/20/d4/1320d4fc3489bc614f6c2d5bc4a37da2.jpg"
    target="_blank"
  >
  </a>
</header>

<slot />

<footer class="flex flex-col items-center gap-4 mt-40 mb-10">
  <div class="flex justify-center gap-4">
    <a
      href="https://www.linkedin.com/in/silvio-neres-0120ab243/"
      target="_blank"
    >
      <img
        src="icons/linkedin.svg"
        alt="Ícone do linkedin"
        class="w-12 hover:scale-105"
      />
    </a>
    <a href="https://github.com/DatNeres" target="_blank">
      <img
        src="icons/github.svg"
        alt="Ícone do github"
        class="w-12 hover:scale-105"
      />
    </a>
  </div>
  <p class="font-Poppins text-sm">© Copyright 2025 Silvio Neres</p>
</footer>
