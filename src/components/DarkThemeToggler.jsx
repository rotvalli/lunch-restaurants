import { useState } from 'react';

export const DarkThemeToggler = _ => {
    const bodyClasses = document.body.classList;
    const [buttonText, setButtonText] = useState(bodyClasses.contains('dark')?'✺':'☽');
    const toggleDark = _ => {
        if (bodyClasses.contains('dark')) {
            bodyClasses.remove('dark');
            setButtonText('☽');
        } else {
            bodyClasses.add('dark');
            setButtonText('✺');
        }
    }
    return (
        <button className="btn-toggle-dark" onClick={toggleDark}>{buttonText}</button>
    )
}