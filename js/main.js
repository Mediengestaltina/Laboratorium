document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navigation = document.querySelector(".main-nav");
    const hamburger = document.querySelector(".burgermenue");

    hamburger.addEventListener("click", function() {
        navigation.classList.toggle("slowdown");
    });

    // Datumsauswahl
    const monthSelect = document.querySelector('select[name="monat"]');
    const yearSelect = document.querySelector('select[name="jahr"]');

    if (monthSelect && yearSelect) {
        // Initial Tage befüllen
        populateDays();
        
        // Event Listener für Änderungen
        monthSelect.addEventListener('change', populateDays);
        yearSelect.addEventListener('change', populateDays);
    }
});

// Funktion zum Befüllen der Tage basierend auf Monat und Jahr
function populateDays() {
    const monthSelect = document.querySelector('select[name="monat"]');
    const yearSelect = document.querySelector('select[name="jahr"]');
    const daySelect = document.querySelector('select[name="tag"]');
    
    if (!monthSelect || !yearSelect || !daySelect) return;

    const month = parseInt(monthSelect.value) || 1; // Fallback auf Januar
    const year = parseInt(yearSelect.value) || 2025; // Fallback auf 2025

    // Tage im ausgewählten Monat ermitteln
    const daysInMonth = new Date(year, month, 0).getDate();
    
    // Bestehende Tage löschen
    while (daySelect.options.length > 1) {
        daySelect.remove(1);
    }

    // Neue Tage hinzufügen
    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i < 10 ? '0' + i : i; // Führende Null für einstellige Zahlen
        daySelect.add(option);
    }
}