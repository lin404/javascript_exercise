var numUniqueEmails = function (emails) {
    const emailsSet = new Set();
    for (let i = 0; i < emails.length; i++) {
        let [local, domain] = emails[i].split('@')
        local = local.replace(/\.|(\+.*)/g, '')

        emailsSet.add(`${local}@${domain}`)
    }

    return emailsSet.size;
};