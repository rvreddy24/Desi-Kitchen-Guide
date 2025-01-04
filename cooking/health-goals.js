document.addEventListener('DOMContentLoaded', () => {
    // Load previously selected goals if any
    const savedGoals = JSON.parse(localStorage.getItem('healthGoals')) || [];
    
    // Check the previously selected goals
    savedGoals.forEach(goal => {
        const checkbox = document.querySelector(`input[value="${goal}"]`);
        if (checkbox) checkbox.checked = true;
    });

    // Add click handler for continue button
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.addEventListener('click', () => {
        // Get all checked checkboxes
        const selectedGoals = Array.from(document.querySelectorAll('input[name="health-goal"]:checked'))
            .map(checkbox => checkbox.value);

        // Add loading state to button
        continueBtn.classList.add('loading');
        continueBtn.disabled = true;

        // Save selected goals to localStorage
        localStorage.setItem('healthGoals', JSON.stringify(selectedGoals));

        // Add animation before redirect
        document.querySelector('.health-goals-container').classList.add('fade-out');

        // Redirect after animation
        setTimeout(() => {
            window.location.href = 'ingredients.html';
        }, 300);
    });

    // Add visual feedback for checkbox selection
    document.querySelectorAll('.health-goal-option').forEach(option => {
        option.addEventListener('change', (e) => {
            const checkbox = e.target;
            const goalContent = checkbox.closest('.goal-content');
            
            if (checkbox.checked) {
                goalContent.classList.add('selected');
            } else {
                goalContent.classList.remove('selected');
            }
        });
    });
}); 