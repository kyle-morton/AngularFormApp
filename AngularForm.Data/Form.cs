//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AngularForm.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Form
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Form()
        {
            this.Employers = new HashSet<Employer>();
            this.References = new HashSet<Reference>();
        }
    
        public System.Guid Id { get; set; }
        public System.DateTime CreateDate { get; set; }
        public System.DateTime ModifyDate { get; set; }
        public bool IsActive { get; set; }
    
        public virtual Address Address { get; set; }
        public virtual Education Education { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Employer> Employers { get; set; }
        public virtual MiscInformation MiscInformation { get; set; }
        public virtual Person Person { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Reference> References { get; set; }
    }
}
