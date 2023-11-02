export const selectType = 'SELECTTYPE';

export const toggleSelect = (id) => {
    return {type: selectType, id: id }
}