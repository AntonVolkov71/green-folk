<template>
  <div class="about scrollspy" id="about" data-views="about">
    <div class="about__container row">

      <div class="hide-on-small-only about__sidebar col s4">
        <img src="@/assets/images/avatar.jpg" alt="my_photo" class="about__avatar">
      </div>
      <div class="col s8 about__content ">
        <div class="about__about-me">
          <h1 class="about__about-me_title">{{"About" | localize}}</h1>
          <p class="about__about-me_text">{{"textAboutDesc" | localize }}</p>
        </div>
        <div class="about__info row">
          <div class="about__contacts col s7">
            <h1 class="about__contacts_title">{{"Contact Details" | localize}}</h1>
            <p class="about__contacts_text">{{"City" | localize}}: {{"Podolsk" | localize}}</p>
            <p class="about__contacts_text">{{"Email" | localize}}: volkovanton71@yandex.ru</p>
            <p class="about__contacts_text">{{"Phone" | localize}}: +7 (985) 232-22-53</p>
          </div>
          <div class="about__resume col s5">
            <button class="btn about__download">
              <a href='@/assets/files/resume_Volkov.pdf' download>
                <i class="fa fa-download"></i>
                {{"Load resume" | localize}}
              </a>

            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>