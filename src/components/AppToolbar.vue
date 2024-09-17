<script setup lang="ts">
import NotificationDropdown from './dropdown/NotificationDropdown.vue';
import ProfileDropdown from './dropdown/ProfileDropdown.vue';
// dropdown imports
// const sDrawer = ref(true);
</script>

<template>
  <!------Header-------->
  <VAppBar :elevation="10">
    <VAppBarNavIcon icon="mdi-home" :to="{ name: 'Dashboard' }" />
    <VSpacer />
    <!-- Notification -->
    <NotificationDropdown />
    <ProfileDropdown />
  </VAppBar>
</template>
