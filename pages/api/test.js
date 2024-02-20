export default function(req,res){
    console.log(req.url.split('?test=')[1]);
return res.json({goog:"good"});
}