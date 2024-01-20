export function getInitialUserState() {
    return {
        firstName: '',
        lastName: '',
        birthDate: '',
        quote: '',
        professionId: 1,
        countryId: 1,
    };
}

export function calculateAge(birthDate) {
    if (!birthDate) return '';

    const birth = new Date(birthDate);
    const today = new Date();
    let months = today.getMonth() - birth.getMonth() + (today.getFullYear() - birth.getFullYear()) * 12;
    if (today.getDate() < birth.getDate()) months--;

    return months < 1 ? '1 month' : months < 12 ? `${months} months` : `${Math.floor(months / 12)} years`;
}