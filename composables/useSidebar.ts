const isSidebarOpen = ref(false);

export const useSidebar = () => {
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
