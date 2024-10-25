<script>
  import data from '../../data/blog.json'

  let posts = data.posts
  let post_atual = posts[0]

  const alteraPost = (id) => {
    posts.forEach((post) => {
      if (post.id === id) {
        post_atual = post
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  const filtraPosts = (id, vaiParaTopo) => {
    return posts.filter((post) => post.id !== id)
  }
</script>

<div class="flex flex-col justify-center px-52 max-2xl:px-32 max-xl:px-20 max-md:px-6">
  <ul class="flex">
    <li class="flex flex-col gap-10">
      <h1
        class="text-6xl text-verde max-sm:text-5xl"
      >
        {post_atual.titulo}
      </h1>
      <h2 class="text-3xl max-sm:text-xl">
        {post_atual.subtitulo}
      </h2>
      <div
        class="flex flex-row items-center space-x-2 h-20"
      >
        <img
          class="w-10 h-10 rounded-full border-2 border-white"
          src="blog/silvio.jpeg"
          alt="Silvio Neres"
        />
        <h3 class="text-md text-rosa">
          Silvio Neres - 29/09/2023
        </h3>
      </div>
      {#if post_atual.conteudo_extra}
        {#each post_atual.conteudo_extra as extra}
          <div class="flex flex-col gap-10">
            <a
              class="my-10 text-4xl text-rosa font-bold hover:text-azul"
              href={extra.link}>{extra.titulo}</a
            >
            <img
              class="rounded-xl"
              src={extra.imagem}
              alt={extra.titulo}
            />
            <p class="text-xl">{extra.texto}</p>
          </div>
        {/each}
      {/if}
      {#if !post_atual.conteudo_extra}
        <p class="text-xl">
          {@html post_atual.texto}
        </p>
      {/if}
      {#if post_atual.gerado_ia}
        {#each post_atual.gerado_ia as extra}
          <img
            class="w-[80rem]"
            src={extra.imagem}
            alt={extra.legenda}
          />
          <p class="-mt-4">
            {extra.legenda}
          </p>
        {/each}
      {/if}
    </li>
  </ul>

  <div class="flex flex-col items-center">
    <div class="flex mt-20 text-4xl text-azul">
      Leia também:
    </div>
    <ul class="flex gap-x-10 mt-20 max-2xl:gap-x-6 max-lg:flex-col">
      {#each filtraPosts(post_atual.id) as post}
        <li>
          <button
            type="button"
            on:click={() => alteraPost(post.id)}
            on:keydown={(event) =>
              (event.key === 'Enter' ||
                event.key === ' ') &&
              alteraPost(post.id)}
          >
            <div class="py-10">
              <div
                class="flex-col relative flex w-80 h-72 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105 cursor-pointer caret-slate-700 max-xl:w-[15rem]"
              >
                <div
                  class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg shadow-gray-600 max-xl:h-[7rem]"
                >
                  <img
                    src={post.imagem_capa}
                    alt={post.titulo}
                  />
                </div>
                <div class="p-6">
                  <h2
                    class="text-xl font-semibold text-blue-gray-900"
                  >
                    {post.titulo}
                  </h2>
                </div>
              </div>
            </div>
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>

