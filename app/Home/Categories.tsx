export const listOfCategories = new Map<string, boolean>();
listOfCategories.set('Acting',true);
listOfCategories.set('Advertising',true);
listOfCategories.set('African American businesspeople',true);
listOfCategories.set('Business',true);
listOfCategories.set('Business & Economics',true);
listOfCategories.set('Computers',true);
listOfCategories.set('Design',true);
listOfCategories.set('Education',true);
listOfCategories.set('English essays',true);
listOfCategories.set('Family',true);
listOfCategories.set('Fiction',true);
listOfCategories.set('Health',true);
listOfCategories.set('Hercules (Roman mythology)',true);
listOfCategories.set('Humor',true);
listOfCategories.set('Juvenile Fiction',true);
listOfCategories.set('Juvenile Nonfiction',true);
listOfCategories.set('Language Arts',true);
listOfCategories.set('Literary Criticism',true);
listOfCategories.set('Medical',true);
listOfCategories.set('Music',true);
listOfCategories.set('Nature',true);
listOfCategories.set('Psychology',true);
listOfCategories.set('Self-actualization (Psychology)',true)
listOfCategories.set('Self-Help',true);
listOfCategories.set('Sports',true);
listOfCategories.set('Technology',true);

// INSERT INTO public.categories (categories)
// SELECT DISTINCT categories
// FROM public.book
// ON CONFLICT (categories) DO NOTHING;