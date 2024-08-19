<script>
    import { writable } from 'svelte/store';
    import Modal from 'svelte-simple-modal';
    import MathModal from './MathModal.svelte';
    import ScienceModal from './ScienceModal.svelte';
    import HistoryModal from './HistoryModal.svelte';
    import ReadingModal from './ReadingModal.svelte';
    const mathmodal = writable(null);
    const showMathModal = () => mathmodal.set(MathModal);
    const sciencemodal = writable(null);
    const showScienceModal = () => sciencemodal.set(ScienceModal);
    const historymodal = writable(null);
    const showHistoryModal = () => historymodal.set(HistoryModal);
    const readingmodal = writable(null);
    const showReadingModal = () => readingmodal.set(ReadingModal);
</script>

<h1>What Subject Would You Like To Practice Today?</h1>
<Modal show={$mathmodal} styleContent={{ backgroundColor: '#242424' }} styleCloseButton={{ background:'#242424' }}>
    <button on:click={showMathModal}>Math</button>
</Modal>
<Modal show={$sciencemodal} styleContent={{ backgroundColor: '#242424' }} styleCloseButton={{ background:'#242424' }}>
    <button on:click={showScienceModal}>Science</button>
</Modal><br>
<Modal show={$historymodal} styleContent={{ backgroundColor: '#242424' }} styleCloseButton={{ background:'#242424' }}>
    <button on:click={showHistoryModal}>History & Social Studies</button>
</Modal>
<Modal show={$readingmodal} styleContent={{ backgroundColor: '#242424' }} styleCloseButton={{ background:'#242424' }}>
    <button on:click={showReadingModal}>Reading</button>
</Modal>