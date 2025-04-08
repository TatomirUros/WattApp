using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web_Api.Models;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web;

namespace Web_Api.Controllers
{
    public class ZaposleniController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select ZaposleniId,ZaposleniIme,Odeljenje,convert(varchar(10),DatumZaposljavanja,120) as DatumZaposljavanja,Slika from dbo.Zaposleni";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Zaposleni z)
        {
            try
            {
                string query = @"insert into dbo.Zaposleni values 
                               ('" + z.ZaposleniIme + @"'
                               ,'" + z.Odeljenje + @"'
                               ,'" + z.DatumZaposljavanja + @"'
                               ,'" + z.Slika + @"'
                               )
                               ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Dodato uspesno!";

            }
            catch (Exception e)
            {
                return "2";
            }

        }

        public string Put(Zaposleni z)
        {
            try
            {
                string query = @"
                                update dbo.Zaposleni set 
                                ZaposleniIme='" + z.ZaposleniIme + @"'
                                ,Odeljenje='" + z.Odeljenje + @"' 
                                ,DatumZaposljavanja='" + z.DatumZaposljavanja + @"'
                                ,Slika='" + z.Slika + @"'
                                where ZaposleniId=" + z.ZaposleniId + @"
                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Update-ovano uspesno!";
            }
            catch (Exception e)
            {
                return "Neuspesno update-ovanje!";
            }

        }

        public string Delete(int id)
        {
            try
            {
                string query = @"delete from dbo.Zaposleni where ZaposleniId=" + id + @"";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Uspesno izbrisano!";
            }
            catch (Exception e)
            {
                return "Neuspesno izbrisano!";
            }

        }

        [Route("api/Zaposleni/GetAllOdeljenja")]
        [HttpGet]
        public HttpResponseMessage GetAllOdeljenja()
        {
            string query = @"select OdeljenjeIme from dbo.Odeljenje";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK,table);
        }

        [Route("api/Zaposleni/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + fileName);

                postedFile.SaveAs(physicalPath);
                return fileName; 


            }catch(Exception e)
            {
                return "anonymous.png";
            }
        }

    }
}
