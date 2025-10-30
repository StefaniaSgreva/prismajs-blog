import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Crea un nuovo post
function createPost(data) {
  return prisma.post.create({
    data,
  });
}

// Legge un post tramite slug
function getPostBySlug(slug) {
  return prisma.post.findUnique({
    where: { slug },
  });
}

// Restituisce l'elenco di tutti i post
function getAllPosts() {
  return prisma.post.findMany();
}

// Modifica un post esistente identificato dallo slug
function updatePost(slug, data) {
  return prisma.post.update({
    where: { slug },
    data,
  });
}

// Elimina un post tramite slug
function deletePost(slug) {
  return prisma.post.delete({
    where: { slug },
  });
}

// Creazione di un nuovo post
createPost({
  title: "Titolo nuovo post",
  slug: "titolo-nuovo-post",
  content: "Contenuto del post",
  published: true,
  image: "url/immagine.jpg"
})
.then(post => {
  console.log("Post creato:", post);
})
.catch(error => {
  console.error("Errore nella creazione del post:", error);
});

// Lettura di un post tramite slug
getPostBySlug("titolo-nuovo-post")
.then(post => {
  if (post) {
    console.log("Post trovato:", post);
  } else {
    console.log("Post non trovato");
  }
})
.catch(error => {
  console.error("Errore nella lettura del post:", error);
});

// Modifica di un post
updatePost("titolo-nuovo-post", { published: false })
.then(updatedPost => {
  console.log("Post aggiornato:", updatedPost);
})
.catch(error => {
  console.error("Errore nell'aggiornamento del post:", error);
});

// Eliminazione di un post
deletePost("titolo-nuovo-post")
.then(deletedPost => {
  console.log("Post eliminato:", deletedPost);
})
.catch(error => {
  console.error("Errore nell'eliminazione del post:", error);
});
