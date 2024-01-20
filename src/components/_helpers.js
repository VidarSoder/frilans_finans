export function getInitialUserState() {
    return {
        firstName: '',
        lastName: '',
        birthDate: '',
        quote: '',
        professionId: null,
        countryId: null,
    };
}

export function validateUser(user) {
    let errors = {};

    if (!user.firstName.trim()) {
        errors.firstName = 'First name is required.';
    }
    if (!user.lastName.trim()) {
        errors.lastName = 'Last name is required.';
    }

    if (user.birthDate && new Date(user.birthDate) > new Date().setHours(23, 59, 59, 999)) {
        errors.birthDate = 'Date of birth must be in the past or today.';
    }

    // Can add more validation rules here

    return errors;
}

export function calculateAge(birthDate) {
    if (!birthDate) return '';

    const birth = new Date(birthDate);
    const today = new Date();
    let months = today.getMonth() - birth.getMonth() + (today.getFullYear() - birth.getFullYear()) * 12;
    if (today.getDate() < birth.getDate()) months--;

    return months < 1 ? '1 month' : months < 12 ? `${months} months` : `${Math.floor(months / 12)} years`;
}