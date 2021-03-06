﻿using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ArchitectNow.Boilerplate.Angular2.Data.Repositories;
using ArchitectNow.Boilerplate.Angular2.Data.Models;

namespace ArchitectNow.Boilerplate.Angular2.Tests.RepositoryTests
{
    /// <summary>
    /// Summary description for ValueRepositoryTests
    /// </summary>
    [TestClass]
    public class ValueRepositoryTests
    {
        public ValueRepositoryTests()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        [TestMethod]
        [TestCategory("Repository")]
        public void GetValueBadId()
        {
            var _repo = new ValuesRepository();

            var _results = _repo.GetOne(Guid.NewGuid());

            Assert.IsNull(_results);
        }

        [TestMethod]
        [TestCategory("Repository")]
        public void CreateNewValue()
        {
            var _repo = new ValuesRepository();

            var _newValue = new ValueModel();
            _newValue.Name = "Joe";
            _newValue.Id = Guid.NewGuid();

            _repo.Save(_newValue);

            var _result = _repo.GetOne(_newValue.Id);

            Assert.IsNotNull(_result);

        
        }
    }
}
