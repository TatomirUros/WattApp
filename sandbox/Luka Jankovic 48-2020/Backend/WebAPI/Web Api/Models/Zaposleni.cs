using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web_Api.Models
{
    public class Zaposleni
    {
        public int ZaposleniId { get; set; }
        public string ZaposleniIme { get; set; }
        public string Odeljenje { get; set; }
        public string DatumZaposljavanja { get; set; }
        public string Slika { get; set; }

    }
}