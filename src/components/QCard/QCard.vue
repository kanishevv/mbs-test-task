<script setup lang="ts">
import type { IDrink } from '@/interfaces/IDrink'

defineProps<IDrink>()
</script>

<template>
    <article class="q-card">
        <picture class="q-card__picture" v-if="thumbnail">
            <img :src="thumbnail" alt="" loading="lazy">
        </picture>
        <div class="q-card__info">
            <div class="q-card__block">
                <h2>{{ name }}</h2>
            </div>
            <div class="q-card__block">
                <p>{{ category }}</p>
                <p>{{ glass }}</p>
                <p>{{ alcoholic }}</p>
            </div>
            <div class="q-card__block">
                <div class="q-card__title">
                    <h3>Instructions</h3>
                </div>
                <p>{{ instructions }}</p>
            </div>
            <div class="q-card__block" v-if="ingredients">
                <div class="q-card__title">
                    <h3>List of ingredients</h3>
                </div>
                <dl>
                    <template v-for="item in  ingredients" :key="item.ingredient">
                        <dt>{{ item.ingredient }}</dt>
                        <dd>{{ item.measure }}</dd>
                    </template>
                </dl>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.q-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row-reverse;
    }
}

.q-card__info {
    padding: 0.5rem;

    @media (min-width: 768px) {
        width: 70%;
    }
}

.q-card__picture {
    display: flex;
    width: 100%;
    height: 300px;
    padding: 0.5rem;

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: contain;
    }

    @media (min-width: 768px) {
        width: 30%;
    }
}

.q-card__title {
    margin-bottom: 1rem;
}

.q-card__block {
    line-height: 1.5;
    margin: 1rem 0;

    dl {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }

    dt {
        flex-basis: 50%;
        padding: 5px 0;
        opacity: 0.5;
    }

    dd {
        flex-basis: 50%;
        padding: 5px 0;
    }
}
</style>