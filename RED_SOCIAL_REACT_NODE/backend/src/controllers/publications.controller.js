const publicationCtrl={};

publicationCtrl.getPublications=(req, res) => res.json({ message: [] })
publicationCtrl.createPublication=(req, res) => res.json({ message: 'Publicado' })
publicationCtrl.getPublication=(req, res) => res.json({ message: 'Publicación'})
publicationCtrl.updatePublication=(req, res) => res.json({ message: 'Publicación actualizada' })
publicationCtrl.deletePublication=(req, res) => res.json({ message: 'Publicación eliminada' })

module.exports=publicationCtrl;