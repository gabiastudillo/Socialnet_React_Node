const productCtrl={};

productCtrl.getProducts=(req, res) => res.json({ message: [] })
productCtrl.createProduct=(req, res) => res.json({ message: 'Producto Publicado' })
productCtrl.getProduct=(req, res) => res.json({ message: 'Producto'})
productCtrl.updateProduct=(req, res) => res.json({ message: 'Producto actualizado' })
productCtrl.deleteProduct=(req, res) => res.json({ message: 'Producto eliminado' })

module.exports=productCtrl;