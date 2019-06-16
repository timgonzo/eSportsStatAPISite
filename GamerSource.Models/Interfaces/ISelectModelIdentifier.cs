namespace GamerSource.Models
{
    //<Summary>
    // This is meant to massage instances where only being able to identify one Id in a model is not sufficient
    // THIS INTERFACE MUST BE USED BY THE LOWEST LEVEL MODEL! IT IS AUTOMATICALLY RETURNED IF ENTITY AUTH DETECTS IT!
    // This is used for when dynamic inserts require use of IModelIdentifier, and updates must also be secured
    //</Summary>
    public interface ISelectModelIdentifier
    {
        //Nullable to keep it the same with IModelIdentifier
        int? SelectId { get; set; }
    }
}