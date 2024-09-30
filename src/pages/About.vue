<template>
  <div class="content">
  <h1>Top 10 des meilleurs scoreur</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div class="displayPlayer" v-else>
      <div v-for="player in topPlayers" :key="player.id">
        <img :src="player.headshot" alt="Player headshot" />
        <p class="center">{{ player.fullName }} - Goals: {{ player.goals }} (#{{ player.sweaterNumber }})</p>
      </div>
  </div>
  </div>

</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { getTopPlayers, PlayerStats } from '../services/nhlService';

export default {
  setup() {
    const topPlayers = ref<PlayerStats[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    // Fetch the top players on component mount
    onMounted(async () => {
      loading.value = true;
      try {
        topPlayers.value = await getTopPlayers();
      } catch (err) {
        error.value = 'Failed to load top players';
        console.error(err);
      } finally {
        loading.value = false;
      }
    });

    return {
      topPlayers,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #333;
}

.displayPlayer{
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
