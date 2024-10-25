<script>
  import data from '../../data/certificados.json'
  import { browser } from '$app/environment'

  let certificados = data.certificados
  let selectedTag = ''
  let uniqueTags = Array.from(
    new Set(
      certificados.flatMap(
        (certificado) => certificado.tags
      )
    )
  )
  let currentIndex = 0
  let tamanhoTela = 2

  if (browser) {
    tamanhoTela = window.innerWidth <= 1536 ? 2 : 3

    window.addEventListener('resize', () => {
      tamanhoTela = window.innerWidth <= 1536 ? 2 : 3
    });
  }

  const selectTag = (tag) => {
    selectedTag = selectedTag === tag ? '' : tag
    currentIndex = 0
  };

  const next = () => {
    let filteredCertificados =
      certificados.filter(
        (certificado) =>
          !selectedTag ||
          certificado.tags.includes(selectedTag)
      );

    if (
      currentIndex + tamanhoTela <
      filteredCertificados.length
    ) {
      currentIndex += tamanhoTela
    }
  };

  const prev = () => {
    let filteredCertificados =
      certificados.filter(
        (certificado) =>
          !selectedTag ||
          certificado.tags.includes(selectedTag)
      );

    if (currentIndex - tamanhoTela >= 0) {
      currentIndex -= tamanhoTela
    }
  };

  const totalItems = () => {
    return certificados.filter(
      (certificado) =>
        !selectedTag ||
        certificado.tags.includes(selectedTag)
    ).length
  };

  let touchStartX = 0
  let touchEndX = 0

  const handleTouchStart = (event) => {
    touchStartX = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture()
  };

  const handleGesture = () => {
    if (touchStartX - touchEndX > 50) {
      next()
    } else if (touchEndX - touchStartX > 50) {
      prev()
    }
  }
</script>


<div
  class="flex flex-col justify-center gap-14 px-40 max-2xl:px-28 max-xl:px-20 max-md:px-6"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
>
  <h1
    class="font-Righteous text-7xl text-verde max-sm:text-5xl"
  >
    CERTIFICADOS
  </h1>
  <div
    class="flex flex-wrap w-[75rem] gap-4 mt-4 max-xl:w-[60rem] max-lg:w-[40rem] max-md:w-[20rem]"
  >
    {#each uniqueTags as tag}
      <button
        class="bg-azul px-2 py-1 rounded-lg w-fit cursor-pointer hover:scale-110 {selectedTag ===
        tag
          ? 'bg-rosa'
          : ''}"
        on:click={() => selectTag(tag)}
      >
        {tag}
      </button>
    {/each}
  </div>

  <div class="flex justify-center">
    <div
      class="flex justify-start gap-6 w-fit mt-20 max-lg:justify-center max-lg:flex-wrap"
    >
      {#each certificados
        .filter((certificado) => !selectedTag || certificado.tags.includes(selectedTag))
        .slice(currentIndex, currentIndex + tamanhoTela) as certificado}
        <div class="flex py-10">
          <div
            class="flex-col items-center flex w-[24rem] h-[34rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105 cursor-pointer caret-slate-700 max-lg:w-[20rem]"
          >
            <div
              class="mx-4 -mt-6 w-fit overflow-hidden rounded-xl border-4 shadow-lg shadow-gray-600"
            >
              <img
                src={certificado.imagem}
                alt={certificado.titulo}
              />
            </div>
            <div class="p-6">
              <h2
                class="text-xl font-semibold text-blue-gray-900"
              >
                {certificado.titulo}
              </h2>
              <p class="mt-4">
                {certificado.texto}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex justify-center -mt-10">
    {#each Array(Math.ceil(totalItems() / tamanhoTela)) as _, index}
      <button
        class="w-5 h-5 rounded-full mx-1 cursor-pointer {currentIndex /
          tamanhoTela ===
        index
          ? 'bg-verde'
          : 'bg-gray-300'}"
        on:click={() =>
          (currentIndex = index * tamanhoTela)}
      >
      </button>
    {/each}
  </div>
</div>
