<template>
  <section
    id="trusted-schools"
    class="trusted-schools section"
    aria-labelledby="trusted-schools-heading"
  >
    <div class="container">
      <h2 id="trusted-schools-heading" class="section-title trusted-schools__title">
        Trusted by students from
      </h2>

      <div class="marquee-block">
        <p id="primary-schools-label" class="row-label">Primary Schools</p>
        <div
          class="marquee"
          role="region"
          aria-labelledby="primary-schools-label"
        >
          <div class="marquee-track marquee-track--primary">
            <div class="marquee-group">
              <div
                v-for="(school, index) in primarySchools"
                :key="`p-a-${index}`"
                class="logo-card"
              >
                <div class="logo-card-inner">
                  <img
                    v-if="!imgFailed[school.name]"
                    :src="school.logo"
                    :alt="`School logo: ${school.name}`"
                    class="logo-img"
                    loading="lazy"
                    width="160"
                    height="96"
                    @error="onLogoError(school.name)"
                  />
                  <div
                    v-else
                    class="logo-placeholder"
                    role="img"
                    :aria-label="`Placeholder for ${school.name} logo`"
                  >
                    <span class="logo-placeholder-text">{{ school.name }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="marquee-group" aria-hidden="true">
              <div
                v-for="(school, index) in primarySchools"
                :key="`p-b-${index}`"
                class="logo-card"
              >
                <div class="logo-card-inner">
                  <img
                    v-if="!imgFailed[school.name]"
                    :src="school.logo"
                    alt=""
                    class="logo-img"
                    loading="lazy"
                    width="160"
                    height="96"
                    @error="onLogoError(school.name)"
                  />
                  <div v-else class="logo-placeholder" aria-hidden="true">
                    <span class="logo-placeholder-text">{{ school.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="marquee-block marquee-block--secondary">
        <p id="secondary-schools-label" class="row-label">Secondary Schools</p>
        <div
          class="marquee"
          role="region"
          aria-labelledby="secondary-schools-label"
        >
          <div class="marquee-track marquee-track--secondary">
            <div class="marquee-group">
              <div
                v-for="(school, index) in secondarySchools"
                :key="`s-a-${index}`"
                class="logo-card"
              >
                <div class="logo-card-inner">
                  <img
                    v-if="!imgFailed[school.name]"
                    :src="school.logo"
                    :alt="`School logo: ${school.name}`"
                    class="logo-img"
                    loading="lazy"
                    width="160"
                    height="96"
                    @error="onLogoError(school.name)"
                  />
                  <div
                    v-else
                    class="logo-placeholder"
                    role="img"
                    :aria-label="`Placeholder for ${school.name} logo`"
                  >
                    <span class="logo-placeholder-text">{{ school.name }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="marquee-group" aria-hidden="true">
              <div
                v-for="(school, index) in secondarySchools"
                :key="`s-b-${index}`"
                class="logo-card"
              >
                <div class="logo-card-inner">
                  <img
                    v-if="!imgFailed[school.name]"
                    :src="school.logo"
                    alt=""
                    class="logo-img"
                    loading="lazy"
                    width="160"
                    height="96"
                    @error="onLogoError(school.name)"
                  />
                  <div v-else class="logo-placeholder" aria-hidden="true">
                    <span class="logo-placeholder-text">{{ school.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const LOGO_BASE = '/school-logos'

/** @typedef {{ name: string, logo: string, type: 'primary' | 'secondary' }} School */

/** @type {School[]} */
const primarySchools = [
  {
    name: 'Jurong West Primary School',
    logo: `${LOGO_BASE}/jurong-west-primary.png`,
    type: 'primary',
  },
  {
    name: 'Frontier Primary School',
    logo: `${LOGO_BASE}/frontier-primary.png`,
    type: 'primary',
  },
  {
    name: 'Xingnan Primary School',
    logo: `${LOGO_BASE}/xingnan-primary.png`,
    type: 'primary',
  },
  {
    name: 'Westwood Primary School',
    logo: `${LOGO_BASE}/westwood-primary.png`,
    type: 'primary',
  },
  {
    name: 'Rulang Primary School',
    logo: `${LOGO_BASE}/rulang-primary.png`,
    type: 'primary',
  },
  {
    name: 'Pioneer Primary School',
    logo: `${LOGO_BASE}/pioneer-primary.png`,
    type: 'primary',
  },
]

/** @type {School[]} */
const secondarySchools = [
  {
    name: 'Fuhua Secondary School',
    logo: `${LOGO_BASE}/fuhua-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Hua Yi Secondary School',
    logo: `${LOGO_BASE}/hua-yi-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Commonwealth Secondary School',
    logo: `${LOGO_BASE}/commonwealth-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Juying Secondary School',
    logo: `${LOGO_BASE}/juying-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Westwood Secondary School',
    logo: `${LOGO_BASE}/westwood-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Yuhua Secondary School',
    logo: `${LOGO_BASE}/yuhua-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Yuan Ching Secondary School',
    logo: `${LOGO_BASE}/yuan-ching-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Jurong Secondary School',
    logo: `${LOGO_BASE}/jurong-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Jurong West Secondary School',
    logo: `${LOGO_BASE}/jurong-west-secondary.png`,
    type: 'secondary',
  },
  {
    name: 'Kent Ridge Secondary School',
    logo: `${LOGO_BASE}/kent-ridge-secondary.png`,
    type: 'secondary',
  },
]

const imgFailed = reactive({})

const onLogoError = (name) => {
  imgFailed[name] = true
}
</script>

<style scoped>
.trusted-schools {
  background: var(--background-secondary);
  position: relative;
  overflow: hidden;
}

.trusted-schools .container {
  position: relative;
  z-index: 1;
}

.trusted-schools__title {
  margin-bottom: var(--spacing-lg);
}

.marquee-block {
  margin-bottom: var(--spacing-2xl);
}

.marquee-block--secondary {
  margin-bottom: 0;
}

.row-label {
  font-family: var(--font-family-display);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-xs);
}

.marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.marquee-track--primary {
  animation-name: marquee-scroll;
  animation-duration: 52s;
}

.marquee-track--secondary {
  animation-name: marquee-scroll;
  animation-duration: 68s;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-sm) 0;
}

.logo-card {
  flex: 0 0 auto;
}

.logo-card-inner {
  width: clamp(7.5rem, 18vw, 10.5rem);
  height: clamp(4.5rem, 11vw, 5.75rem);
  border-radius: var(--radius-xl);
  background: white;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: 1;
  filter: none;
}

.logo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-xs);
  background: linear-gradient(
    145deg,
    rgba(255, 153, 153, 0.12),
    rgba(153, 204, 255, 0.12)
  );
  border-radius: calc(var(--radius-xl) - 2px);
}

.logo-placeholder-text {
  font-size: clamp(0.65rem, 1.8vw, 0.78rem);
  font-weight: 600;
  line-height: 1.35;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow: visible;
  }

  .marquee-track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    gap: var(--spacing-md);
  }

  .marquee-track .marquee-group:last-child {
    display: none;
  }

  .marquee-group {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-md);
  }

  .marquee:hover .marquee-track {
    animation-play-state: running;
  }
}

@media (max-width: 768px) {
  .marquee-block {
    margin-bottom: var(--spacing-xl);
  }

  .marquee-group {
    gap: var(--spacing-md);
  }

  .logo-card-inner {
    width: clamp(6.75rem, 42vw, 9rem);
    height: clamp(4rem, 22vw, 5rem);
  }
}
</style>
