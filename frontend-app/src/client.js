import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: "nuyz7ua4",
    dataset: "production",
    apiVersion: "2022-02-01",
    useCdn: true,
    token: "skrjYPwxS9pFG42mgZor7fL5RlF1N08Xsn4mVDDwJiBLzVwIJ8BRUtBmAWY7Nu21ipe3xU12UlpmAXvrZHgmRmv6fI9LqQqiYpzDqZz30Y1gd9T4rO1ZBg52ufqPVYkhMaxVtUu6EJKvOLHAuvlVQAoxc9zo5AD6nRrUY4cd9LKGeby6nB5h",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source);
